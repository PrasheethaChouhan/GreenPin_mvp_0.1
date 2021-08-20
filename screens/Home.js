import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
//import { Card } from 'react-native-paper';
//import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
//import MyHeader from '../components/MyHeader';

import { Header, Icon, Badge } from 'react-native-elements';
export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1B2E0F' }}>
        <Header
          centerComponent={{
            text: 'GreenPin',
            style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate('NotificationScreen');
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />

        <Text style={{color:'white', marginTop:10, fontSize:22}}>
          Upcoming Events
        </Text>

        <ScrollView>
          <TouchableOpacity>
            <Card
              style={{
                padding: 0,
                marginTop: '-5%',
                backgroundColor: '#1B2E0F',
                color: '#82152b',
              }}
              isDark>
              <CardImage
                style={{ fontSize: 20, color: 'red', marginTop: 50 }}
                source={require('../assets/plant.jpg')}
              />
            </Card>
          </TouchableOpacity>

        <Text style={{color:'white', marginTop:20, fontSize:22}}>
          Recent Plantations
        </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 300,
              padding: 10,
              marginTop: 10,
              backgroundColor: '#1B2E0F',
              color: '#82152b',
            }}>
              
            <ScrollView horizontal={true}>
              <Image
                style={{ width: 300, height: 300, padding: 10 }}
                source={require('../assets/images1.jpeg')}
              />
              <Image
                style={{ width: 300, height: 300 }}
                source={require('../assets/images2.jpeg')}
              />
              <Image
                style={{ width: 400, height: 300 }}
                source={require('../assets/images3.jpeg')}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
  },
  products: {
    width: width - 50 * 2,
    paddingVertical: 50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  shadow: {
    shadowColor: '#415136',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },
});
