import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { useGetAttractions } from '@/services/attractionService';
import AttractionCard from '@/components/AttractionCard/AttractionCard';

const SuggestTrip = () => {
  const [duplicateAttractions, setDuplicateAttractions] = useState([]);
  const { data, error, isLoading, status, isFetched } = useGetAttractions({
    sort: 'POPULAR',
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (isFetched && status === 'success' && data?.data?.content) {
      setDuplicateAttractions(data.data.content);
      console.log(data.data.content);
    }
  }, [status, isFetched, data]);

  const startDragging = () => {};
  const stopDragging = () => {};
  const onDrag = () => {};

  return (
    <section className='flex flex-col items-center justify-center w-full py-6 overflow-hidden'>
      <div className='suggest-trip'>
        <div className='flex flex-col items-center justify-center gap-12 py-12 size-full'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='flex items-center gap-2 text-3xl font-bold font-Namum'>
              <Star className='text-4xl text-yellow-500' />
              <span>요즘 떠오르는 장소</span>
              <Star className='text-4xl text-yellow-500' />
            </h1>
          </div>

          {isLoading && <div className='loading-spinner'></div>}
          {error && (
            <div className='error-message'>
              데이터를 불러오는데 실패했습니다. 다시 시도해주세요.
            </div>
          )}

          <div
            ref={containerRef}
            className='relative w-full mx-auto overflow-hidden ul-wrapper'
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={onDrag}
          >
            <ul className='flex items-center gap-5 px-10 carousel'>
              {duplicateAttractions.map((attraction) => (
                <AttractionCard key={attraction.id} data={attraction} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SuggestTrip;
