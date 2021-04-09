import React from 'react';

import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

export const menuData = [
  {title: 'About', link: '/about'},
  {title: 'Trips', link: '/trips'},
  {title: 'Careers', link: '/careers'},
  {title: 'Contact', link: '/contact'},
]

export const StatsData = [
  {
    icon: (<GiEarthAmerica 
      css={`
        color: #047bf1
      `}
    />),
    title: "Over 120 Destinations",
    desc: "Travel to over 150 unique places"
  },
  {
    icon: (<MdAirplanemodeActive 
      css={`
        color: #f3a82e
      `}
    />),
    title: "1 Million Trips Made",
    desc: "Over 20000 trips completed last month"
  },{
    icon: (<MdTimer 
      css={`
        color: #f34f2e
      `}
    />),
    title: "Fastest Support",
    desc: "Access our support team 24/7"
  },{
    icon: (<FaMoneyCheck 
      css={`
        color: #3af576
      `}
    />),
    title: "Best Deals",
    desc: "We offer the best prices"
  },
]
