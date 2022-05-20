import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images, COLORS, SIZES, FONTS, icons} from '../constants';

const RequirementBar = ({icon, barPercentage}) => {
  return (
    <View style={{height: 60, alignItems: 'center'}}>
      {/* Icon */}
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.gray,
        }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.secondary,
          }}
        />
      </View>
      {/* Bar */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}
      />
    </View>
  );
};

const RequirementsDetail = ({icon, label, detail}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />

        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h2,
          }}>
          {label}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2}}>
          {detail}
        </Text>
      </View>
    </View>
  );
};

const PlantDetail = ({navigation}) => {
  // Render
  function renderRequirementsBar() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <RequirementBar icon={icons.sun} barPercentage="50%" />
        <RequirementBar icon={icons.drop} barPercentage="25%" />
        <RequirementBar icon={icons.temperature} barPercentage="80%" />
        <RequirementBar icon={icons.garden} barPercentage="30%" />
        <RequirementBar icon={icons.seed} barPercentage="50%" />
      </View>
    );
  }

  function renderRequirements() {
    return (
      <View
        style={{
          flex: 4,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.base,
          justifyContent: 'space-around',
          marginTop: SIZES.base,
        }}>
        <RequirementsDetail icon={icons.sun} label="Sunlight" detail="15ºC" />
        <RequirementsDetail
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementsDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25ºC"
        />
        <RequirementsDetail icon={icons.garden} label="Soil" detail="3 KG" />
        <RequirementsDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 MG"
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingVertical: SIZES.padding,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primary,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          }}
          onPress={() => console.log('Take Action Pressed')}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>Take Action</Text>
          <Image
            source={icons.chevron}
            resizeMode="cover"
            style={{
              marginLeft: SIZES.padding,
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{flex: 1, color: COLORS.secondary, ...FONTS.h3}}>
            Almost 2 years growing time
          </Text>
          <Image
            source={icons.downArrow}
            resizeMode="cover"
            style={{
              tintColor: COLORS.secondary,
              marginLeft: SIZES.base,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: SIZES.padding,
          right: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: 'rgba(255,255,255, 0.5)',
              }}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
            <Image
              source={icons.focus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <View style={{flex: 1}}>
            <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>
              Glory Mantra
            </Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{height: '35%'}}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
      </View>

      {/* Requirements */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          backgroundColor: COLORS.lightGray,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            color: COLORS.secondary,
            ...FONTS.h1,
            paddingHorizontal: SIZES.padding,
          }}>
          Requirements
        </Text>

        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
      </View>
      {renderHeader()}
    </View>
  );
};

export default PlantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
