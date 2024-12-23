import ChallengeIntroduction from '@/pages/Home/sections/ChallengeIntroduction';
import MainIntroduction from '@/pages/Home/sections/MainIntroduction';
import SpecialLife from '@/pages/Home/sections/SpecialLife';
import SpecialPlaceIntroduction from '@/pages/Home/sections/SpecialPlaceIntroduction';
import SpecsIntroduction from '@/pages/Home/sections/SpecsIntroduction';
import SuggestIntroduction from '@/pages/Home/sections/SuggestIntroduction';
import SuggestTrip from '@/pages/Home/sections/SuggestTrip';

function Home() {
  return (
    <div className='flex flex-col gap-10 home'>
      <MainIntroduction />
      <SpecialLife />
      <SuggestIntroduction />
      <ChallengeIntroduction />
      <SpecialPlaceIntroduction />
      <SuggestTrip />
      <SpecsIntroduction />
    </div>
  );
}

export default Home;
