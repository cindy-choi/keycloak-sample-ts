import React from 'react';
import Errors from '@/pages/common/Errors';
import { useTranslation } from 'react-i18next';

function Error404() {
  const { t } = useTranslation();
  return (
    <Errors code="404" guide={t('error.notfound')} />
  );
}

export default Error404;
