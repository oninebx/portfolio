import React from 'react';
import styles from './BriefSection.module.scss';
import cn from 'classnames';

type Props = {
  title: string;
  content: string;
  linkText: string;
  linkTarget: string;
}

const BriefSection = ({
  title, 
  content, 
  linkText,
  linkTarget
}: Props) => {
  return (
    <div className={styles.container}>
      <span className={cn(styles.title, styles.bold, styles.uppercase)}>{title}</span>
      <span>{content}</span>
      <a href={linkTarget}>
        <span>{linkText}</span>
        <span></span>
      </a>
    </div>
  )
}

export default BriefSection