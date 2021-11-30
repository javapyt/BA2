import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
// Inspired by: https://openbase.com/js/react-qr-barcode-scanner
// Constraints: Web Scanner only works on localhost OR https!

export default function Scanner() {
  const [data, setData] = React.useState('Not Found');
  const[scanned, setScanned] = React.useState(false);
  return (
    <>
    <BarcodeScannerComponent
      width={500}
      height={500}
      onUpdate={(err, result) => {
        if(!scanned){
        if (result){
          setData(result.getText());
          setScanned(true); 
        } 
        else setData('Not Found')
      }
      }}
    />
    <p style={styles.title}>{data}</p>
  </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cameraScannerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: 350,
    overflow: 'hidden',
    borderRadius: 30,
  },
  cameraScannerBoxWeb: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 800,
    overflow: 'hidden',
    borderRadius: 30,
  },
    text: {
      fontSize: 12,
      margin: 20,
    },
    button: {
    borderWidth: 10,
  },
};
