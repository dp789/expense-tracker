/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const primary = "#ea580c";
const secondary = "#f8c49c";
const text = "#212529";
const neutral120 = "#223144";
const success = "#28a745";
const error = "#dc3545";
const primaryWhite = "#FFFFFF";
const neutral80 = "#F2F4F7";
const neutral100 = "#98A2B3";
const primary100 = "#022c22";
const primary110 = "#FE4A00";
const neutral90 = "#C7CDD6";
const neutral110 = "#475467";
const neutral130 = "#0F131B";
const aquamarine = "#8AF4D6";
const neutral70 = "#F9FAFB";
const primaryBlack = "#000000";
const blurGray = "#898989";
const cardShadow = "rgba(0, 0, 0, 0.05)";
const cardShadow2 = "rgba(0, 0, 0, 0.08)";
const modalShadow = "rgba(39, 46, 61, 0.2)";
const blurBg = "#6F7276";
const sideBarSelection = "#FCE8E5";
const primaryGreen = "#34d399";

const colors = {
  transparent: "rgba(0,0,0,0)",
  // Example colors:
  text,
  primary,
  neutral120,
  success,
  error,
  primaryWhite,
  neutral80,
  neutral100,
  primary100,
  primary110,
  neutral90,
  neutral110,
  neutral130,
  aquamarine,
  neutral70,
  primaryBlack,
  blurGray,
  cardShadow,
  cardShadow2,
  modalShadow,
  blurBg,
  sideBarSelection,
  primaryGreen,
  secondary,
  theme: {
    lightMode: {
      primary,
      neutral120,
    },
    darkMode: {
      primary: neutral120,
      neutral120: primary,
    },
  },
};
export default colors;
