// src/hooks/useClickAwayListener.tsx
import { useEffect } from 'react';

const useClickAwayListener = (
    ref: React.RefObject<HTMLElement>,
    onClickAway: () => void,
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickAway();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickAway]);
};

export default useClickAwayListener;
