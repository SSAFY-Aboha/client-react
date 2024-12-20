import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

const AttractionCard = ({ data, isEdit }) => {
  const { id, image, likeCount, title, sidoName, gugunName } = data;
  return (
    <li className='relative'>
      <Link
        to={`/place/${id}`}
        className={`block transition-all duration-300 cursor-pointer ${
          !isEdit && 'hover:scale-95'
        }`}
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex flex-col gap-2 bg-gradient rounded-xl'>
            <div className='flex items-center justify-center w-[19rem] h-[13rem]'>
              <img
                className='object-cover w-full h-full rounded-md'
                src={image || '/src/assets/images/default_image.png'}
                alt={id}
              />
            </div>
            <div className='flex items-center justify-between w-full'>
              <div className='flex flex-col justify-start text-xl font-bold'>
                <span className='text-sm'>{title}</span>
                <span className='text-xs text-gray-500'>{`${sidoName} ${gugunName}`}</span>
              </div>
              <div className='flex items-center justify-center gap-1 text-sm'>
                <i className='text-2xl text-red-500 pi pi-heart icon-size'></i>
                <span>{likeCount}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {isEdit && (
        <button
          onClick='deleteAttraction'
          className='absolute p-2 py-0 bg-white rounded-full right-2 top-2 hover:bg-gray-300 hover:text-white'
        >
          <i className='font-bold text-red-500 pi pi-trash'></i>
        </button>
      )}
    </li>
  );
};

AttractionCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    likeCount: PropTypes.number,
    title: PropTypes.string,
    sidoName: PropTypes.string,
    gugunName: PropTypes.string,
  }).isRequired,

  isEdit: PropTypes.bool,
};

export default AttractionCard;
