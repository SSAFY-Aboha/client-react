import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
// Layout Component
import MainLayout from '@/components/layout/MainLayout/MainLayout';
import MypageLayout from '@/components/layout/MypageLayout/MypageLayout';

// Page Component
import Home from '@/pages/Home/Home.jsx';
import NotFoundPage from '@/components/common/NotFound/NotFoundPage';
import PlaceListPage from '@/pages/PlaceListPage/PlaceListPage';
import PlaceDetailPage from '@/pages/PlaceDetailPage/PlaceDetailPage';
import AbogMainPage from '@/pages/AbogMainPage/AbogMainPage';
import AbogEditPage from '@/pages/AbogEditPage/AbogEditPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import SignupPage from '@/pages/SignupPage/SignupPage';
import MypageMainPage from '@/pages/MypageMainPage/MypageMainPage';
import MypageSettingsPage from '@/pages/MypageSettingsPage/MypageSettingsPage';
import ChallengePage from '@/pages/ChallengePage/ChallengePage';
import SuggestPage from '@/pages/SuggestPage/SuggestPage';

function App() {
  const routes = {
    place: '/place',
    login: '/login',
    signup: '/signup',
    mypage: '/mypage/:id',
    challenge: '/challenge',
    suggest: '/suggest',
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* header, footer 를 공통으로 가지는 route */}
        <Route element={<MainLayout />}>
          {/* 메인 페이지 */}
          <Route index element={<Home />} />
          {/* 여행지 list */}
          <Route path={routes.place} element={<PlaceListPage />} />
          {/* 여행지 detail */}
          <Route path={`${routes.place}/:id`} element={<PlaceDetailPage />} />
          {/* Abog board */}
          <Route path='/abog'>
            <Route index element={<AbogMainPage />} />
            {/* 아보그 등록 */}
            <Route path='edit' element={<AbogEditPage />} />
          </Route>
        </Route>

        {/* Login */}
        <Route path={routes.login} element={<LoginPage />} />
        {/* Signup */}
        <Route path={routes.signup} element={<SignupPage />} />
        {/* My page */}
        <Route path={routes.mypage} element={<MypageLayout />}>
          <Route index element={<MypageMainPage />} />
          <Route path='setting' element={<MypageSettingsPage />} />
        </Route>
        {/* Today's challenge */}
        <Route path={routes.challenge} element={<ChallengePage />} />
        {/* Travel suggestions */}
        <Route path={routes.suggest} element={<SuggestPage />} />
        {/* 404 Not Found */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
