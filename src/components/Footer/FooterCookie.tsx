'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import CardPixel from '@/components/Card/CardPixel';
import ButtonPixel from '@/components/Button/ButtonPixel';
import useCookie from '@/hooks/useCookie';
import useScroll from '@/hooks/useScroll';
import { useTranslation } from 'react-i18next';

export default function FooterCookie() {
  const [cookie, setCookie] = useCookie('policy');
  const scroll = useScroll();
  const [checkCookie, setCheckCookie] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (cookie) {
      setCheckCookie(true);
    }
  }, [cookie, scroll]);

  if (checkCookie) {
    return <></>;
  } else {
    return (
      <div
        className={`fixed px-[8px] bottom-[8px] w-full items-center justify-center left-0 transition-all ${scroll < 150 ? '-translate-y-1/2 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <CardPixel className="" title="" size="full">
          <div className="flex">
            <div>
              <Image
                src="/shiba-logo-tp.png"
                alt="shiba-icon"
                width={70}
                height={70}
                priority
              />
            </div>
            <div>{t('cookie')}</div>
          </div>
          <div className="flex justify-center w-full space-x-3 mt-3">
            <ButtonPixel onClick={() => setCookie('all')}>
              {t('buttons.accept')}
            </ButtonPixel>
            <ButtonPixel color="danger" onClick={() => setCookie('reject')}>
              {t('buttons.reject')}
            </ButtonPixel>
          </div>
        </CardPixel>
      </div>
    );
  }
}

// เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้เว็บไซต์ ท่านสามารถศึกษารายละเอียดการใช้คุกกี้ได้ที่ “นโยบายการใช้คุกกี้”
// และสามารถเลือกตั้งค่ายินยอมการใช้คุกกี้ได้โดยคลิก “การตั้งค่าคุกกี้” นโยบายการใช้คุกกี้
