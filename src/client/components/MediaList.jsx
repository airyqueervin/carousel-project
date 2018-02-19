import React from 'react';
import MediaListEntry from './MediaListEntry.jsx';

const MediaList = ({ media, currPage, fetch, pages }) => (
  media.data.map((item, i) => <MediaListEntry fetch={fetch} pages={pages} currPage={currPage} key={i} item={item} />)
)

export default MediaList;