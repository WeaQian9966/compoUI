import { useRef, useCallback } from 'react';

interface DragOptions {
    onDrag: (delta: number) => void;
    onDragStart?: () => void;
    onDragEnd?: () => void;
    sensitivity?: number; // Pixels per unit
    direction?: 'vertical' | 'horizontal';
}

export function useDrag({
    onDrag,
    onDragStart,
    onDragEnd,
    sensitivity = 1,
    direction = 'vertical'
}: DragOptions) {
    const isDragging = useRef(false);
    const lastPosition = useRef<{ x: number; y: number } | null>(null);

    const handleMove = useCallback(
        (clientX: number, clientY: number) => {
            if (!isDragging.current || !lastPosition.current) return;

            const deltaX = clientX - lastPosition.current.x;
            const deltaY = lastPosition.current.y - clientY; // Up is positive for vertical

            const delta = direction === 'vertical' ? deltaY : deltaX;

            // Normalized delta based on sensitivity
            const normalizedDelta = delta / sensitivity;

            onDrag(normalizedDelta);

            lastPosition.current = { x: clientX, y: clientY };
        },
        [onDrag, sensitivity, direction]
    );

    const onMouseMove = useCallback(
        (e: MouseEvent) => {
            e.preventDefault();
            handleMove(e.clientX, e.clientY);
        },
        [handleMove]
    );

    const onTouchMove = useCallback(
        (e: TouchEvent) => {
            // e.preventDefault(); // Sometimes interferes with scroll if not careful, but for knobs we usually want to prevent scroll
            const touch = e.touches[0];
            handleMove(touch.clientX, touch.clientY);
        },
        [handleMove]
    );

    const stopDragging = useCallback(() => {
        isDragging.current = false;
        lastPosition.current = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', stopDragging);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', stopDragging);
        onDragEnd?.();
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }, [onMouseMove, onTouchMove, onDragEnd]);

    const startDragging = useCallback(
        (e: React.MouseEvent | React.TouchEvent) => {
            e.preventDefault();
            e.stopPropagation();
            isDragging.current = true;

            const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

            lastPosition.current = { x: clientX, y: clientY };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', stopDragging);
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', stopDragging);

            document.body.style.cursor = direction === 'vertical' ? 'ns-resize' : 'ew-resize';
            document.body.style.userSelect = 'none';

            onDragStart?.();
        },
        [onMouseMove, onTouchMove, stopDragging, onDragStart, direction]
    );

    return {
        onMouseDown: startDragging as React.MouseEventHandler,
        onTouchStart: startDragging as React.TouchEventHandler,
    };
}
