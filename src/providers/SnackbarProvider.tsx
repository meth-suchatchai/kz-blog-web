"use client";
import { Alert, Snackbar } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

type SnackbarCtxType = {
    showMessage(message: string, type?: 'success' | 'error' | 'info' | 'warning', timeout?: number): void;
}

const SnackbarCtx = createContext<SnackbarCtxType | undefined>(undefined);

export const SnackbarProvider = ({ children}: {children: ReactNode}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'success' | 'error' | 'info' | 'warning'>('success');
    const [timeout, setTimeout] = useState(3000);

    const showMessage = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success', timeout = 3000) => {
        setMessage(message);
        setType(type);
        setTimeout(timeout);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <SnackbarCtx.Provider value={{ showMessage }}>
            {children}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={timeout}
                onClose={handleClose}
                message={message}
                action={
                    <button onClick={handleClose}>
                        Close
                    </button>
                }
            >
                <Alert onClose={handleClose} severity={type} variant={'filled'} sx={{ width: '100%' }}>{message}</Alert>
            </Snackbar>
        </SnackbarCtx.Provider>
    )
}

export const useSnackbar = () => {
    const ctx = useContext(SnackbarCtx);
    if (!ctx) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return ctx;
}