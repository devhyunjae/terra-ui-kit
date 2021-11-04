import React, { useState } from 'react';
import { Tab } from '../Tab';

export default {
  title: 'station-ui/Tab',
};

const tabs = [
  {
    text: 'tab 1',
  },
  {
    text: 'tab 2',
  },
  {
    text: 'tab 3',
  },
  {
    text: 'tab 4',
  },
];

const pages = [
  <div>selected page 1</div>,
  <div>selected page 2</div>,
  <div>selected page 3</div>,
  <div>selected page 4</div>,
];

export const Basic = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTab2, setSelectedTab2] = useState(0);
  const [selectedTab3, setSelectedTab3] = useState(0);
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 12,
        }}
      >
        {tabs.map((tab: any, i: number) => (
          <Tab
            key={`round-tab-${i.toString()}`}
            onClick={() => setSelectedTab(i)}
            selected={selectedTab === i}
          >
            {tab.text}
          </Tab>
        ))}
      </div>
      <div>{pages[selectedTab]}</div>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          gap: 12,
        }}
      >
        {tabs.map((tab: any, i: number) => (
          <Tab
            variant="line"
            key={`line-tab-${i.toString()}`}
            onClick={() => setSelectedTab2(i)}
            selected={selectedTab2 === i}
          >
            {tab.text}
          </Tab>
        ))}
      </div>
      <div>{pages[selectedTab2]}</div>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
        }}
      >
        {tabs.map((tab: any, i: number) => (
          <Tab
            variant="rectangle"
            key={`rec-tab-${i.toString()}`}
            onClick={() => setSelectedTab3(i)}
            selected={selectedTab3 === i}
          >
            {tab.text}
          </Tab>
        ))}
      </div>
      <div>{pages[selectedTab3]}</div>
    </>
  );
};
