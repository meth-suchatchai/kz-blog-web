import CardPixel from '@/components/Card/CardPixel';
import Image from 'next/image';

export default function Maintenance() {
  return (
    <div className="relative w-full">
      <Image
        className="absolute left-0 right-0 mx-auto -top-5"
        src="/shiba-logo-tp.png"
        alt="logo"
        width="50"
        height="50"
      />
      <CardPixel title={'Maintenance'} size="w-1/2" className="mx-auto">
        <h1 className="normal-text text-black">Sorry for inconvenience</h1>
      </CardPixel>
    </div>
  );
}
