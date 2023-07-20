import React from "react";
import { useTranslation } from "react-i18next";

type StatsCardProps = {
  title: string;
  text: string;
};

const StatsCard = (props: StatsCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="stat-card rounded-2 bg-white p-4">
      <div className="title w-100 text-dark">{t(props.title)}</div>
      <hr className="border-success opacity-100 w-25 border-2" />
      <div className="text w-100 text-light">{t(props.text)}</div>
    </div>
  );
};

export default StatsCard;
