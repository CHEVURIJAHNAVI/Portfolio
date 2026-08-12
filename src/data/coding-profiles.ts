import { CodingProfileItem } from "@/types";

export const CODING_PROFILES_DATA: CodingProfileItem[] = [
  {
    platform: "LeetCode",
    username: "jahnavi_c",
    url: "https://leetcode.com",
    iconName: "Code2",
    color: "from-amber-500 to-orange-600",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Contest Rating", value: "1,650+" },
      { label: "Global Rank", value: "Top 15%" },
      { label: "Daily Streak", value: "120+ Days" }
    ]
  },
  {
    platform: "GitHub",
    username: "jahnavi-chevuri",
    url: "https://github.com/jahnavi-chevuri",
    iconName: "Github",
    color: "from-purple-600 to-indigo-600",
    stats: [
      { label: "Repositories", value: "25+" },
      { label: "Contributions", value: "500+ / yr" },
      { label: "Stars Earned", value: "80+" },
      { label: "Pull Requests", value: "45+" }
    ]
  },
  {
    platform: "CodeChef",
    username: "jahnavi_cc",
    url: "https://codechef.com",
    iconName: "Terminal",
    color: "from-yellow-600 to-amber-700",
    stats: [
      { label: "Division Rating", value: "3-Star" },
      { label: "Max Rating", value: "1,610" },
      { label: "Contests", value: "20+" },
      { label: "Problems", value: "150+" }
    ]
  },
  {
    platform: "GeeksforGeeks",
    username: "jahnavi_gfg",
    url: "https://geeksforgeeks.org",
    iconName: "Cpu",
    color: "from-emerald-600 to-green-700",
    stats: [
      { label: "Coding Score", value: "850+" },
      { label: "Institute Rank", value: "Top 5" },
      { label: "Articles", value: "3 Published" },
      { label: "POTD Streak", value: "90+ Days" }
    ]
  },
  {
    platform: "HackerRank",
    username: "jahnavi_hr",
    url: "https://hackerrank.com",
    iconName: "Award",
    color: "from-cyan-600 to-blue-700",
    stats: [
      { label: "Problem Solving", value: "5 Stars Gold" },
      { label: "Java Badge", value: "5 Stars Gold" },
      { label: "Python Badge", value: "5 Stars Gold" },
      { label: "SQL Badge", value: "5 Stars Gold" }
    ]
  }
];
