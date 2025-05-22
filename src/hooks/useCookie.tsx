'use client';

import { useState, useEffect } from 'react';

export default function useCookie(key: string, defaultValue?: string) {
  const getCookie = (name: string) => {
    const match = document.cookie
      .split(';')
      .find((row) => row.startsWith(' ' + name + '='));
    console.log(match);
    return match ? decodeURIComponent(match.split('=')[1]) : undefined;
  };

  const [cookie, setCookieState] = useState(() => {
    if (typeof document !== 'undefined') {
      const value = getCookie(key);
      console.log('value:', value);
      return value;
    }
    return undefined;
  });

  useEffect(() => {
    if (cookie === undefined && defaultValue !== undefined) {
      setCookie(defaultValue);
    }
  }, []);

  const setCookie = (value: string, days = 30) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
    setCookieState(value);
  };

  const removeCookie = () => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    setCookieState(undefined);
  };

  return [cookie, setCookie, removeCookie] as const;
}
