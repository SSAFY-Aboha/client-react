import PropTypes from 'prop-types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserIcon } from 'lucide-react';

const ProfileIcon = ({ src, customClass }) => {
  return (
    <Avatar className='size-10'>
      <AvatarImage src={src} className={customClass} alt='avatar' />
      <AvatarFallback>
        <UserIcon className='size-6' />
      </AvatarFallback>
    </Avatar>
  );
};

ProfileIcon.propTypes = {
  src: PropTypes.string.isRequired, // 프로필 이미지 URL
  customClass: PropTypes.string,
};

export default ProfileIcon;
