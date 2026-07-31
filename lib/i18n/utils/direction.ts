import type { Direction } from "../types";

export function isRTL(direction: Direction) {
  return direction === "rtl";
}

export function isLTR(direction: Direction) {
  return direction === "ltr";
}

export function inlineStart(direction: Direction) {
  return direction === "rtl" ? "right" : "left";
}

export function inlineEnd(direction: Direction) {
  return direction === "rtl" ? "left" : "right";
}
