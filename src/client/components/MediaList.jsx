import React from 'react';
import MediaListEntry from './MediaListEntry.jsx';

const MediaList = ({ media, pageNum, currPage }) => {
  const data = media.data.slice(pageNum[currPage].start, pageNum[currPage].end)
  return (
    data.map((item, i) => <MediaListEntry key={i} item={item} />)
  )
};

export default MediaList;