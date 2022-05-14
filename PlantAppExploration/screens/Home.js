import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES, images} from '../constants';

const Home = () => {
  const [newPlants, setNewPlants] = useState([
    {
      id: 0,
      name: 'Planta 1',
      favorite: false,
      img: images.plant1,
    },
    {
      id: 1,
      name: 'Planta 2',
      favorite: true,
      img: images.plant2,
    },
    {
      id: 2,
      name: 'Planta 3',
      favorite: false,
      img: images.plant3,
    },
    {
      id: 3,
      name: 'Planta 4',
      favorite: false,
      img: images.plant4,
    },
  ]);

  // Render New Items
  function renderNewPlants(item, index) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: SIZES.base,
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{width: SIZES.width * 0.23, height: '85%', borderRadius: 15}}
        />
        <View
          style={{
            position: 'absolute',
            bottom: '17%',
            right: 0,
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('Favorite on Pressed ')}
          style={{
            position: 'absolute',
            top: '15%',
            left: 7,
          }}>
          <Image
            source={item.favorite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}>
          <View
            style={{
              margin: SIZES.padding * 0.9,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
              <TouchableOpacity
                onPress={() => console.log('Focus on Password')}>
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: SIZES.base}}>
              <FlatList
                data={newPlants}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's Share */}
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
                Today's Share
              </Text>
              <TouchableOpacity onPress={() => console.log('See All Pressed')}>
                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '88%',
                marginTop: SIZES.base,
              }}>
              <View style={{flex: 1, backgroundColor: 'yellow'}}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => console.log('Image Pressed')}>
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1, marginTop: SIZES.font}}
                  onPress={() => console.log('Image Pressed')}>
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, backgroundColor: 'red'}} />
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// 16:30
