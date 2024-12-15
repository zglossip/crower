package com.zglossip.thrive.services;

public class Util {

  private static final int TWENTY_FOUR_HOUR_CONVERSION_AMOUNT = 1200;
  private static final int PM_MIN_TIME = 1300;

  private static String toTimeString(Integer time) {
    char[] charArray = time.toString().toCharArray();
    return String.format("%s%s:%s%s", charArray[0], charArray[1], charArray[2], charArray[3]);
  }

  public static String getTimeString(Integer time) {
    if (time < PM_MIN_TIME) {
      return toTimeString(time);
    } else {
      return toTimeString(time - TWENTY_FOUR_HOUR_CONVERSION_AMOUNT);
    }
  }

}
