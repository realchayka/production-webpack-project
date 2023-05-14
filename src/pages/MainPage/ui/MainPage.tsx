import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('main')
    return (
        <div>
            {t('новый перевод')}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;