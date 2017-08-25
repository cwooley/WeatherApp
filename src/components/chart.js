import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}
export default function  (props){
  return(
    <div>
        <Sparklines data={props.data} width={180} height={props.height} >
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>average: {average(props.data)} {props.units}</div>
    </div>
  )
}
