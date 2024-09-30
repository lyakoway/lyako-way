import React, { useCallback, useEffect, useState } from "react";
// import { store } from "../../../../store";

import { getDayTime } from "src/common/utils";
import { observer } from "mobx-react";
import { store } from "src/store";

import {
  HeavenlyBody,
  WindowLightLeft,
  WindowLightRight,
  WindowHotspot,
  WindowView,
  WeatherIconWrapper,
  // WeatherConditionsWrapper,
  // WeatherConditions,
  // WeatherConditionsText,
  // IconClose,
  // Title,
} from "./style";
import "./style.css";

import ModalСlimateСontrol from "./ModalСlimateСontrol";

import Cloud from "./Сloud";
import WeatherIcon from "./WeatherIcon";

// import { Popup } from "semantic-ui-react";

// import { ReactComponent as CloseOutline } from "../../../common/icon/CloseOutline.svg";

const Window = observer(({ theme, time, checkedTheme }) => {
  const [animationClikTeme, setAnimationClikTeme] = useState(false);
  const [animationCheckedTheme, setAnimationCheckedTheme] = useState(true);
  const [timeLeftSunMoon, setTimeLeftSunMoon] = useState(0);
  const [percentRemainingSunMoon, setPercentRemainingSunMoon] = useState(0);
  // const [leftWindowSunMoon, setLeftWindowSunMoon] = useState(-60);
  const [leftRotateWindowSunMoon, setLeftRotateWindowSunMoon] = useState(-60);
  const [lightOffOpacitySun, setLightOffOpacitySun] = useState(0);
  const [lightOffOpacityMoon, setLightOffOpacityMoon] = useState(0);
  const [lightOffOpacity, setLightOffOpacity] = useState(0);
  const [dayToNightColor, setDayToNightColor] = useState("#0c2233");
  const [weather, setWeather] = useState(2);
  // const [сlimateСontrol, setСlimateСontrol] = useState("sunnyMoon");
  const [isOpen, setIsOpen] = useState(false);

  const winter = false;
  console.log("weather", weather);

  // проверка что день
  const dayTime = getDayTime(time).dayTime;
  // восход в секунадх
  const sunriseStr = getDayTime(time).sunriseStr * 60;
  // закат в секундах
  const sunsetStr = getDayTime(time).sunsetStr * 60;
  // текущее время в секундах
  const timesHouse = getDayTime(time).timesHouse * 60;

  const сlimateСontrol = store.getClimateСontrol();
  console.log("сlimateСontrol", сlimateСontrol);

  // сколько процентов осталось до захода солнца от дна
  const percentRemainingSunValue = Math.round(
    ((sunsetStr - timesHouse) * 100) / (sunsetStr - sunriseStr)
  );

  // сколько времени осталось до захода солца в секундах
  const timesSunsetStr = Math.abs(sunsetStr - timesHouse);

  // констатнта для добавления расчтета сикунда анимации для определения продолжительности (пока вынуждено так для учета времени если перевалило за 24:00)
  const timeDeltaMoon = Math.abs(86400 - sunsetStr);
  // сколько времени осталось до захода луны
  const timesMoon =
    timesHouse <= sunriseStr
      ? Math.abs(sunriseStr - timesHouse)
      : Math.abs(86400 - timesHouse + sunriseStr);
  // 86400 - timesHouse + sunriseStr
  // сколько процентов осталось до захода луны
  const percentRemainingMoonValue = Math.round(
    (timesMoon * 100) / (sunriseStr + timeDeltaMoon)
  );

  // сколько в процентах пути прошло солце и луна
  const lenghtLeftSunMoon = 100 - percentRemainingSunMoon;

  // сколько прошло солце или луна
  // const lightOff = Math.round((lenghtLeftSunMoon * 120) / 100);
  // сколько прошло солце или луна от полного круга 360deg в прроцентах (всего 33%)
  // const lightOffPercent = Math.round((lightOff * 100) / 360);

  useEffect(() => {
    setAnimationCheckedTheme(dayTime ? checkedTheme : !checkedTheme);
    setAnimationClikTeme(true);
  }, [checkedTheme, dayTime]);

  useEffect(() => {
    setAnimationClikTeme(false);
  }, []);

  // useEffect(() => {
  //   console.log("theme", theme, dayTime, timeLeftSunMoon);
  //   const day =
  //     (dayTime && theme === "light") ||
  //     (dayTime === false && theme !== "light");
  //   console.log("day", day);
  //   setAnimationClikTeme(!animationClikTeme);
  // }, [theme]);

  useEffect(() => {
    if (dayTime) {
      setTimeLeftSunMoon(timesSunsetStr);
      setPercentRemainingSunMoon(percentRemainingSunValue);
    } else {
      setTimeLeftSunMoon(timesMoon);
      setPercentRemainingSunMoon(percentRemainingMoonValue);
    }

    const lightOffOpacityValue =
      theme === "light" ? lightOffOpacitySun : lightOffOpacityMoon;
    setLightOffOpacity(lightOffOpacityValue);

    // ширина окна
    const windowView = document?.querySelector("[data-window-view]");
    if (windowView) {
      // const windowViewWidth = windowView.offsetWidth;
      // расположение солнца или луны от левого края окна по горизонтали
      // 25 половина солнца и луны
      // setLeftWindowSunMoon(
      //   Math.abs(
      //     windowViewWidth -
      //       Math.round((windowViewWidth * percentRemainingSunMoon) / 100) -
      //       25
      //   )
      // );

      // расположение солнца или луны в градусах от левого края окна
      // длина пройденного пути в грудах = 120 по ширине окна
      // расчет сколько крадусов прошел от левого края в соотношения процентов ко времени половины дня (так как значение должно быть отрицательно и уменьшатся от -60 в первую половину дня и потом до 60)
      if (lenghtLeftSunMoon <= 50) {
        const leftRotate = Math.round((60 * lenghtLeftSunMoon) / 50) - 60;
        setLeftRotateWindowSunMoon(leftRotate);
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (theme === "light") {
          setLightOffOpacitySun(lenghtLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon((lenghtLeftSunMoon * 0.4) / 50);
        }
      } else {
        const leftRotate = Math.abs(
          60 - Math.round((60 * lenghtLeftSunMoon) / 50)
        );
        setLeftRotateWindowSunMoon(leftRotate);
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (theme === "light") {
          setLightOffOpacitySun(2 - lenghtLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon(0.8 - (lenghtLeftSunMoon * 0.4) / 50);
        }
      }
    }
  }, [
    percentRemainingMoonValue,
    percentRemainingSunMoon,
    percentRemainingSunValue,
    timesMoon,
    timesSunsetStr,
    dayTime,
    theme,
    lenghtLeftSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
  ]);

  useEffect(() => {
    if (сlimateСontrol === "rainy" && theme === "light") {
      setDayToNightColor("rgb(29, 120, 147)");
      setAnimationClikTeme(false);
    } else if (
      сlimateСontrol === "cloudyWithRainAndLightning" &&
      theme === "light"
    ) {
      setDayToNightColor("rgb(0, 53, 71)");
      setAnimationClikTeme(false);
    } else if (сlimateСontrol === "cloudy" && theme === "light") {
      setDayToNightColor("rgb(109, 177, 198)");
      setAnimationClikTeme(false);
    } else {
      const dayToNightColorValue = theme === "light" ? "#88bef5" : "#0c2233";
      setDayToNightColor(dayToNightColorValue);
      setAnimationClikTeme(true);
    }
  }, [theme, сlimateСontrol, checkedTheme, setAnimationClikTeme]);

  console.log(111, dayToNightColor, animationClikTeme);

  // const heavenlyBody = document?.querySelector(".heavenly-body");
  // const heavenlyBody = document?.querySelector("[data-heavenly-body]");
  // useEffect(() => {
  // console.log(111, theme, heavenlyBody);
  // if (theme === "light") {
  //   if (heavenlyBody) {
  //     heavenlyBody.classList.remove("sun");
  //     heavenlyBody.classList.add("moon");
  //   }
  // } else {
  //   heavenlyBody.classList.remove("moon");
  //   heavenlyBody.classList.add("sun");
  // }
  //   setAnimation(!animation);
  // }, [theme]);

  // function checkClass() {
  //   if ($(heavenlyBody).hasClass('sun')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // var heavenlyBody = $('.heavenly-body');
  // $(heavenlyBody).addClass('sun');

  // function sunToMoon() {
  //   if (checkClass()) {
  //     $(heavenlyBody).removeClass('sun');
  //     $(heavenlyBody).addClass('moon');
  //   } else {
  //     $(heavenlyBody).removeClass('moon');
  //     $(heavenlyBody).addClass('sun');
  //   }
  // }

  // var timer = setTimeout(function tick() {
  //   sunToMoon();
  //   timer = setTimeout(tick, 4000);
  // }, 4000);

  // const seasonSummer = (weatherValue) => {
  //   if (weatherValue <= 20) {
  //     store.setClimateСontrol("sunnyMoon");
  //     // return setСlimateСontrol("sunnyMoon");
  //   }
  //   if (20 < weatherValue && weatherValue <= 40) {
  //     store.setClimateСontrol("cloudyWithSunMoon");
  //     // return setСlimateСontrol("cloudyWithSunMoon");
  //   }
  //   if (40 < weatherValue && weatherValue <= 60) {
  //     store.setClimateСontrol("cloudy");
  //     // return setСlimateСontrol("cloudy");
  //   }
  //   if (60 < weatherValue && weatherValue <= 80) {
  //     store.setClimateСontrol("rainy");
  //     // return setСlimateСontrol("rainy");
  //   }
  //   if (80 < weatherValue && weatherValue <= 100) {
  //     store.setClimateСontrol("cloudyWithRainAndLightning");
  //     // return setСlimateСontrol("cloudyWithRainAndLightning");
  //   }
  // };

  // const seasonWinter = (weatherValue) => {
  //   if (weatherValue <= 25) {
  //     store.setClimateСontrol("sunnyMoon");
  //     // return setСlimateСontrol("sunnyMoon");
  //   }
  //   if (25 < weatherValue && weatherValue <= 50) {
  //     store.setClimateСontrol("cloudyWithSunMoon");
  //     // return setСlimateСontrol("cloudyWithSunMoon");
  //   }
  //   if (50 < weatherValue && weatherValue <= 75) {
  //     store.setClimateСontrol("cloudy");
  //     // return setСlimateСontrol("cloudy");
  //   }
  //   if (75 < weatherValue && weatherValue <= 100) {
  //     store.setClimateСontrol("snowy");
  //     // return setСlimateСontrol("snowy");
  //   }
  // };

  // const setConfig = useCallback(
  //   (e) => {
  //     const value = Number(e.target.value);
  //     setWeather(value);

  //     if (winter) {
  //       seasonWinter(value);
  //     } else {
  //       seasonSummer(value);
  //     }
  //   },
  //   [winter]
  // );

  return (
    <div className="window-wrapper">
      <div className="window-scene">
        <div className="window">
          <WindowView
            data-window-view
            dayToNightColor={dayToNightColor}
            timeLeftSunMoon={timeLeftSunMoon}
            animationCheckedTheme={animationCheckedTheme}
            animationClikTeme={animationClikTeme}
          >
            {["sunnyMoon", "cloudyWithSunMoon"].includes(сlimateСontrol) && (
              <HeavenlyBody
                data-heavenly-body
                theme={theme}
                timeLeftSunMoon={timeLeftSunMoon}
                leftRotateWindowSunMoon={leftRotateWindowSunMoon}
                animationClikTeme={animationClikTeme}
                animationCheckedTheme={animationCheckedTheme}
              />
            )}
            {/* <Cloud weather={weather} /> */}
            <Cloud сlimateСontrol={сlimateСontrol} />
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="star star-6"></div>
            <div className="star star-7"></div>
            <div className="ground-light"></div>
            <div className="ground"></div>
            <div className="tree tree-big"></div>
            <div className="tree tree-small tree-small-1"></div>
            <div className="tree tree-small tree-small-2"></div>
            <div className="tree tree-long"></div>
          </WindowView>
          {["sunnyMoon", "cloudyWithSunMoon"].includes(сlimateСontrol) && (
            <WindowHotspot
              lightOffOpacity={lightOffOpacity}
              timeLeftSunMoon={timeLeftSunMoon}
              animationCheckedTheme={animationCheckedTheme}
              lightOffOpacitySun={lightOffOpacitySun}
              lightOffOpacityMoon={lightOffOpacityMoon}
              animationClikTeme={animationClikTeme}
            />
          )}
          <div className="window-frame"></div>
          <div className="window-sill"></div>
        </div>

        {["sunnyMoon", "cloudyWithSunMoon"].includes(сlimateСontrol) && (
          <WindowLightLeft
            lightOffOpacity={lightOffOpacity}
            timeLeftSunMoon={timeLeftSunMoon}
            animationCheckedTheme={animationCheckedTheme}
            lightOffOpacitySun={lightOffOpacitySun}
            lightOffOpacityMoon={lightOffOpacityMoon}
            animationClikTeme={animationClikTeme}
          />
        )}
        {["sunnyMoon", "cloudyWithSunMoon"].includes(сlimateСontrol) && (
          <WindowLightRight
            lightOffOpacity={lightOffOpacity}
            timeLeftSunMoon={timeLeftSunMoon}
            animationCheckedTheme={animationCheckedTheme}
            lightOffOpacitySun={lightOffOpacitySun}
            lightOffOpacityMoon={lightOffOpacityMoon}
            animationClikTeme={animationClikTeme}
          />
        )}
        {/* <Popup
          content={
            <WeatherConditionsWrapper>
              <Title>
                <WeatherConditionsText>Погодные условия</WeatherConditionsText>
                <IconClose onClick={() => setIsOpen(!isOpen)}>
                  <CloseOutline width={24} height={24} />
                </IconClose>
              </Title>
              <WeatherConditions
                type="range"
                step="1"
                name="weather"
                value={weather}
                onChange={setConfig}
                min="0"
                max="100"
              />
            </WeatherConditionsWrapper>
          }
          className="popupSetting"
          on="click"
          position="bottom left"
          trigger={
            <WeatherIconWrapper>
              <WeatherIcon сlimateСontrol={сlimateСontrol} theme={theme} />
            </WeatherIconWrapper>
          }
          open={isOpen}
          onOpen={() => setIsOpen(!isOpen)}
          onClose={() => setIsOpen(!isOpen)}
        /> */}
        <WeatherIconWrapper onClick={() => setIsOpen(!isOpen)}>
          <WeatherIcon сlimateСontrol={сlimateСontrol} theme={theme} />
        </WeatherIconWrapper>
        <ModalСlimateСontrol
          opened={isOpen}
          onRequestClose={() => setIsOpen(false)}
          сlimateСontrol={сlimateСontrol}
          theme={theme}
        />
        {/* <WeatherIcon />
        <WeatherIconSunny /> */}
      </div>
    </div>
  );
});

export default Window;
