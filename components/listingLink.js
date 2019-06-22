import React from 'react';
import Link from 'next/link';

const ListingLink = props => (
  <Link href={`/listing?id=${props.id}`}>
    <a className="call-to-action">{props.children}</a>
  </Link>
);


export default ListingLink;