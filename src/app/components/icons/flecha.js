import React from 'react';

const Flecha = () => {

  const cls1 = {
    fill:            'none',
    stroke:          '#c47200',
    strokeLinecap:  'round',
    strokeLinejoin: 'round',
    strokeWidth:    '24px'
  }
  return ( 
    <svg id="Capa_13" data-name="Capa 13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.4537 311.9412">
      <line style={cls1} x1="71.5439" y1="12" x2="71.5439" y2="71.9375"/>
      <line style={cls1} x1="71.5439" y1="113.2523" x2="71.5439" y2="156.6657"/>
      <line style={cls1} x1="70.5439" y1="194.2278" x2="70.5439" y2="299.9412"/>
      <line style={cls1} x1="12" y1="249.2545" x2="70.5439" y2="299.9412"/>
      <line style={cls1} x1="127.4537" y1="247.4263" x2="70.5439" y2="299.9412"/>
    </svg>
  );
}

export default Flecha;