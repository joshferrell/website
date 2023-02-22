import Image from 'next/image';

import profileImage from '../../public/josh-profile.webp';

type PropTypes = {
  size: number;
};

export const ProfileImage = ({ size }: PropTypes) => (
  <Image
    src={profileImage}
    width={size}
    height={size}
    placeholder="blur"
    alt="Photo of Josh Ferrell"
    style={{ borderRadius: '100%' }}
  />
);
