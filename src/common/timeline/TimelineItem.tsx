import { ReactNode } from 'react';
import { TimelineDivider, TimelineItemContainer, TimelineLeftContainer, TimelineRightContainer } from './style';

interface TimelineItemProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const TimelineItem = ({ leftContent, rightContent }: TimelineItemProps) => (
  <TimelineItemContainer>
    <TimelineLeftContainer>{leftContent}</TimelineLeftContainer>
    <TimelineDivider />
    <TimelineRightContainer>{rightContent}</TimelineRightContainer>
  </TimelineItemContainer>
);

export default TimelineItem;
