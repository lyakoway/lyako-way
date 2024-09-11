import React, {
  FC,
  Fragment,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { observer } from "mobx-react";

import { store } from "src/store";

import MenuBurger from "src/ui/MenuBurger";
import ButtonLink from "src/ui/ButtonLink";
import Ul from "src/ui/Ul";
import Li from "src/ui/Li";

import { Button } from "./style";
import { ListBlogProps, ListBlogSecondProps } from "src/common/types/lang";
import {
  HeaderMenu,
  HeaderTopWrapper,
  Label,
  MenuWrapper,
  Overlay,
} from "src/components/HeaderNav/HeaderMobile/style";

const MenuNavLi = (
  propsList: ListBlogProps[] | ListBlogSecondProps[],
  setPortfoliosValue: (value?: string | ListBlogSecondProps[]) => void,
  setOpened: (value: boolean) => void,
  navMenuLink: string,
  all: string
) =>
  propsList.map((item) => {
    const portfolioButtonText =
      item.value === "All" ? all : item.portfolioButtonText;
    const handleClick = (itemValue?: string | ListBlogSecondProps[]) => {
      setPortfoliosValue(itemValue);
      setOpened(false);
    };
    return (
      <Fragment key={item.id}>
        {item.id !== "JS" && (
          <Li key={item.id} onClick={() => handleClick(item?.value)}>
            <ButtonLink navMenuLink={navMenuLink}>
              <Button>
                <Label style={{ pointerEvents: "none" }}>
                  {portfolioButtonText}
                </Label>
              </Button>
            </ButtonLink>
          </Li>
        )}
        {item.id === "JS" &&
          MenuNavLi(
            item.value,
            setPortfoliosValue,
            setOpened,
            navMenuLink,
            all
          )}
      </Fragment>
    );
  });

interface MenuNavProps {
  propsList: ListBlogProps[];
  setPortfoliosValue?: (value: string) => void;
  header?: boolean;
  navMenuLink?: string;
}

const MenuNav: FC<PropsWithChildren<MenuNavProps>> = observer(
  ({
    children,
    propsList = [],
    setPortfoliosValue = () => {},
    header = false,
    navMenuLink = "",
  }) => {
    const [opened, setOpened] = useState(false);

    const { blog } = store.getToggleLang();

    const onBlur = (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        setOpened(false);
      }
    };

    useEffect(() => {
      opened
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");
    }, [opened]);

    return (
      <>
        <Overlay data-close-border $opened={opened} />
        <HeaderTopWrapper
          data-close-modal
          $header={header}
          onBlur={onBlur}
          tabIndex={1}
        >
          <MenuWrapper $header={header}>
            {children}
            <MenuBurger
              opened={opened}
              handleClick={() => setOpened(!opened)}
            />
          </MenuWrapper>
          <HeaderMenu $opened={opened}>
            <Ul>
              {MenuNavLi(
                propsList,
                setPortfoliosValue,
                setOpened,
                navMenuLink,
                blog.all
              )}
            </Ul>
          </HeaderMenu>
        </HeaderTopWrapper>
      </>
    );
  }
);

export default MenuNav;
