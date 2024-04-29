import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Pdf from 'react-native-pdf';

export default function App() {
  const pdfResource = {uri: "", caches:true}
  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={pdfResource}
        style={styles.pdf}
        onLoadComplete={(numberOfPages,filePath)=>{
          console.log("Number of pages = ", numberOfPages);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
