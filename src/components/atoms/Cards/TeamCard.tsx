import React from "react";
import { useTranslation } from "react-i18next";

type TeamCardProps = {
  img: string;
  name: string;
  position: string;
};

const TeamCard = (props: TeamCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="team-card rounded-4">
      <div className="team-card-img rounded-top-4">
        <img src={props.img} alt={props.name} className="rounded-top-4" />
      </div>
      <div className="team-card-content bg-white p-4 w-100 rounded-bottom-4">
        <div className="w-100 text-black">{t(props.name)}</div>
        <hr className="border-success opacity-100 w-25 border-2" />
        <div className="w-100 text-light">{t(props.position)}</div>
      </div>
    </div>
  );
};

export default TeamCard;
