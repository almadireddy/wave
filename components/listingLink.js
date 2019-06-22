import React from 'react';
import Link from 'next/link';

const ListingLink = props => (
  <Link href={`/listing?address=${props.address}&id=${props.id}`}>
    <a className="call-to-action">{props.children}</a>
  </Link>
);


export default ListingLink;