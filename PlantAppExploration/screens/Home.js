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

const Home = ({navigation}) => {
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

  const [friendsList, setFriendsList] = useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
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

  function renderFriendsComponent() {
    if (friendsList.length === 0) {
      return <View />;
    } else if (friendsList.length <= 3) {
      return friendsList.map((item, index) => (
        <View
          key={`friend-${index}`}
          style={
            index === 0
              ? {flexDirection: 'row'}
              : {flexDirection: 'row', marginLeft: -20}
          }>
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {friendsList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index === 0 ? {} : {marginLeft: -20}}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}

          <Text
            style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>
            +{friendsList.length - 3} More
          </Text>
        </View>
      );
    }
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
      <View
        style={{
          height: '50%',
          backgroundColor: COLORS.lightGray,
        }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding,
              paddingBottom: SIZES.radius,
            }}>
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
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => navigation.navigate('PlantDetail')}>
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1, marginTop: SIZES.font}}
                  onPress={() => navigation.navigate('PlantDetail')}>
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1.3}}>
                <TouchableOpacity
                  style={{flex: 1, marginLeft: SIZES.font}}
                  onPress={() => navigation.navigate('PlantDetail')}>
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Added Friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.lightGray,
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.font * 0.5,
          }}>
          <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
            Add Friends
          </Text>
          <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
            {friendsList.length} total
          </Text>
          <View style={{flexDirection: 'row', height: '60%'}}>
            {/* Friends */}
            <View
              style={{
                flex: 1.3,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {renderFriendsComponent()}
            </View>

            {/* Add Friend */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                Add new
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: SIZES.base,
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.gray,
                }}
                onPress={() => console.log('Add Friend pressed')}>
                <Image
                  source={icons.plus}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
