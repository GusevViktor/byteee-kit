import React, { ReactElement, useState } from "react";
import { getIcon } from "../Icon";
import styles from "./AccordionEpisode.module.scss";
import Status from "../Status/Status";
import { Text } from "../Typography";

export interface AccordionEpisodeProps {
  subtitle: string;
  title: string;
  openingDisabled?: boolean;
  status?: "viewed" | "coming_soon";
  noOpen?: boolean;
  children?: ReactElement | string;
}

const AccordionEpisode = (props: AccordionEpisodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openInner = () => {
    setIsOpen(!isOpen);
  };

  const {
    subtitle,
    title,
    status,
    openingDisabled = false,
    children,
    noOpen
  } = props;

  const {
    wrap,
    header,
    header__open,
    icon,
    icon__open,
    first_line
  } = styles;

  const statuses = {
    "viewed": {
      text: "viewed",
      color: "mint" as const,
    },
    "coming_soon": {
      text: "coming soon",
      color: "grayscale" as const,
    },
  };
  return (
    <div className={wrap}>
      <div
        onClick={openInner}
        className={[
          header,
          isOpen ? header__open : "",
        ].join(" ")}
      >
        <div className={first_line}>
          {/* <h3 className={styles.subtitle}>
            {subtitle}
          </h3> */}
          <Text as="h3" size = {["xs", "xs", "s"]}>
            {subtitle}
          </Text>
          {status && (
            <Status
              size="xs" text={statuses[status].text} color={statuses[status].color}
            />
          )}
          {(!openingDisabled && !noOpen) && (
            <div
              className={
                [
                  icon,
                  isOpen ? icon__open : ""
                ].join(" ")
              }
            >
              {getIcon("ChevronDown", {
                size: "m",
                color: "violet600",
              })}
            </div>
          )}
        </div>
        <Text as="h2" size = {["m", "m", 6]}>
          {title}
        </Text>
        {/* <h2 className={styles.title}>
          {title}
        </h2> */}
      </div>
      {(isOpen && !noOpen) && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionEpisode;
