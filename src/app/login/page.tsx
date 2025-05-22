'use client';
import CardPixel from '@/components/Card/CardPixel';
import InputPixel from '@/components/Input/InputPixel';
import ButtonPixel from '@/components/Button/ButtonPixel';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { selectorAuth } from '@/store/features/auth/selector';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { loginAsyncThunk } from '@/store/features/auth/action';
import { logout } from '@/store/features/auth/slice';
import { useSnackbar } from '@/providers/SnackbarProvider';
import { useEffect } from 'react';

type Inputs = {
  mobile_number: string;
  password: string;
}

const schema = yup.object({
  mobile_number: yup.string().required('Phone number is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { showMessage } = useSnackbar();
  const auth = useAppSelector(selectorAuth);
  
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(loginAsyncThunk(data));
    // console.log(data);
    dispatch(logout());
  }

  useEffect(() => {
    if (auth.error) {
      showMessage(auth.error, 'error');
    }
  }, [auth]);
  
  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <CardPixel title="Account" size="w-[480px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <div>
              <InputPixel label="mobile number" type="text" {...register('mobile_number')} />
              {errors.mobile_number && <span className="text-red-500">{errors.mobile_number.message}</span>}
            </div>
            <div>
              <InputPixel label="password" type="password" {...register('password')} />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            <div>
              <ButtonPixel type="submit">Login</ButtonPixel>
            </div>
          </div>
        </form>
      </CardPixel>
    </div>
    </>
  );
}
