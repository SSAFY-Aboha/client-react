import { Input } from '@/components/ui/input';
import styles from './SignupInput.module.css';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

const SignupInput = ({ metaData, error, value, onChange }) => {
  // 비밀번호 입력 시 보이기/숨기기 상태
  const [showPassword, setShowPassword] = useState(false);

  // input 타입 상태 (비밀번호 입력 시 보이기/숨기기)
  const inputType = useMemo(() => {
    if (metaData.type !== 'password') return metaData.type;
    return showPassword ? 'text' : 'password';
  }, [metaData.type, showPassword]);

  // 유효성 상태
  const validationStatus = useMemo(() => {
    return value && metaData?.isValidate ? 'success' : 'error';
  }, [metaData?.isValidate, value]);

  return (
    <div className='relative flex flex-col w-full gap-5'>
      <div className='relative'>
        <Input
          type={inputType}
          id={metaData.id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${styles['floating-input']} focus-visible:ring-0
              ${validationStatus === 'success' && 'border-green-500'}
              ${validationStatus === 'error' && 'border-red-500'}
            `}
          placeholder=' '
        />

        {metaData.type === 'password' && (
          <button
            type='button'
            className='absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700'
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'}></i>
          </button>
        )}

        <label htmlFor={metaData.id} className={styles['floating-label']}>
          {metaData.text} <span className='text-red-300'>*</span>
        </label>
      </div>

      <div className='absolute text-xs left-3 top-12'>
        {error[metaData.id] && (
          <p className='flex items-center gap-1 text-red-500'>
            <i className='pi pi-times-circle'></i>
            {error[metaData.id]}
          </p>
        )}

        {value && (
          <p
            className={
              metaData?.isValidate
                ? 'text-green-500 flex items-center gap-1'
                : 'text-red-500'
            }
          >
            <i
              className={
                metaData?.isValidate
                  ? 'pi pi-check-circle'
                  : 'pi pi-times-circle'
              }
            ></i>
            {!metaData?.isValidate ? metaData.errorMsg : '사용 가능합니다.'}
          </p>
        )}
      </div>
    </div>
  );
};

SignupInput.propTypes = {
  metaData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isValidate: PropTypes.bool,
    errorMsg: PropTypes.string,
  }).isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SignupInput;
