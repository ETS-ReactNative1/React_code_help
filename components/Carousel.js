import React, { useRef, useState, useEffect,useContext } from 'react'
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements';
import { COLORS, SIZES } from '../assets/constants/index'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {HelpContext} from "../contextApi/context";

 
// import data from '../data/onboarding'
const data = [
  {
    _id: '1',
    title: 'Search Bar',
    description: 'The search bar can be used to search up code questions, That you may have when you search a question that is not available, You get more options with the MDN API to link you to the Docs.',
    img: require('../assets/images/image1.png'),
  },
  {
    _id: '2',
    title: 'Search Filter',
    description: `Filters to help you narrow down your search. Search By Title narrow search by title. Search By Code help's narrow solutions with code syntax. Codesaved access saved answers. Show More Help provides more syntax`,
    img: require('../assets/images/image2.png'),
  },
  {
    _id: '3',
    title: 'Youtube Search',
    description: `Youtube search is available in the show more Help section. When checked it will display code answers on youtube to help understand the question better. Also having a Video tutorial help can be usefull.`,
    img: require('../assets/images/ytimg.png'),
  },
  {
    _id: '4',
    title: 'Mdn Search',
    description: `Mdn Search uses the Mdn API to display answers when the app doesnt have an answers also the mdn option can be checked in the more help section.`,
    img: require('../assets/images/image4.png'),
  }
];

const Carousel = () => { 
    const {setShowOneTimeScreen,storeData,setModalVisible} = useContext(HelpContext)
    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])

    const handleViewableItemsChanged = useRef(({viewableItems})=> {
        setViewableItems(viewableItems)
    })
    useEffect(() => {
        if(!viewableItems[0] || currentPage === viewableItems[0].index) 
            return;
        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])

    const feed = () => {
        setShowOneTimeScreen(false)
        storeData('info',false)
    }
    const handleNext = () => {
        if(currentPage == data.length-1)return;
        const nextSlideIndex = currentPage + 1;
        if (nextSlideIndex != data.length) {
          const offset = nextSlideIndex * SIZES.width;
          flatlistRef?.current.scrollToOffset({offset});
          setCurrentPage(currentPage + 1);
        }
    }

    const handleBack = () => {
        if(currentPage==0) 
            return;

        const prevSlideIndex = currentPage - 1;
        if (prevSlideIndex != data.length) {
            const offset = prevSlideIndex * SIZES.width;
            flatlistRef?.current.scrollToOffset({offset});
            setCurrentPage(currentPage - 1);
        }
    }

    const handleSkipToEnd = () => {
        const lastSlideIndex = data.length - 1;
        const offset = lastSlideIndex * SIZES.width;
        flatlistRef?.current.scrollToOffset({offset});
        setCurrentPage(lastSlideIndex);
    }

    const renderTopSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.base * 2
                }}>
                    {/* Back button */}
                    <TouchableOpacity
                     onPress={handleBack}
                     style={{
                        padding: SIZES.base
                    }}>
                        {/* Back icon */}
                        {/* Hide back button on 1st screen */}
                        <AntDesignIcons name="left" style={{
                            fontSize: 30,
                            color: COLORS.primary,
                            opacity: currentPage == 0 ? 0 : 1
                        }} />
                    </TouchableOpacity>

                    {/* Skip button */}
                    {/* Hide Skip button on last screen */}
                    <TouchableOpacity onPress={handleSkipToEnd}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.white,
                            opacity: currentPage == data.length-1 ? 0 : 1
                        }}>Skip</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal:SIZES.base *2,
                    paddingVertical: SIZES.base *0.5,
                    backgroundColor: 'black'
                }}>
         
                 <TouchableOpacity   style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                                height: 40
                            }}
                            onPress={() => setModalVisible(true)}
                            >
                         <AntDesignIcons
                        name="setting"
                        style={{fontSize: 40, color: COLORS.primary}}
                        />
                                </TouchableOpacity>
                    {/* Pagination */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {
                            // No. of dots
                            [...Array(data.length)].map((_, index)=>(
                                <View
                                key={index} 
                                style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: index==currentPage 
                                    ? COLORS.primary
                                    : COLORS.primary + '20',
                                    marginRight: 8
                                }} />
                            ))
                        }
                        

                    </View>

                    {/* Next or GetStarted button */}
                    {/* Show or Hide Next button & GetStarted button by screen */}
                    {
                        currentPage != data.length - 1 ? (
                            <TouchableOpacity 
                            onPress={handleNext}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: COLORS.primary
                            }}
                            activeOpacity={0.8}
                            >
                                <AntDesignIcons name="right" 
                                style={{fontSize: 18, color: COLORS.white, opacity: 0.3}}/>
                                <AntDesignIcons
                                name="right"
                                style={{fontSize: 25, color: COLORS.white, marginLeft: -15}}
                                />
                            </TouchableOpacity>
                        ) : (
                            // Get Started Button
                            <TouchableOpacity style={{
                                paddingHorizontal: SIZES.base * 2,
                                height: 50,
                                borderRadius: 30,
                                backgroundColor: COLORS.primary,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button 
                                 buttonStyle={{
                                    backgroundColor: COLORS.primary,
                                  }}
                                title='Get Started'
                                onPress={feed}
                                color="black"
                                accessibilityLabel="Navigate to the home screen"
                                />
                                <AntDesignIcons name="right" 
                                style={{fontSize: 18, color: COLORS.primary, opacity: 0.3, marginLeft: SIZES.base}}/>
                                <AntDesignIcons
                                name="right"
                                style={{fontSize: 25, color: COLORS.white, marginLeft: -15}}
                                />
                            </TouchableOpacity>
                        )
                    }
                    
                </View>
            </SafeAreaView>
        )
    }

    const renderFlatlistItem = ({item}) => {
        return (
            <View style={{
                width: SIZES.width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
            }}>
                <View style={{
                    alignItems: 'center',
                    // marginVertical: SIZES.base * 0
                }}>
                    <ImageBackground
                    source={item.img}
                    style={{width: 335, height: 400, resizeMode: 'contains'}}
                    />
                </View>
                <View style={{display: 'flex',alignItems: 'center' }}>
                    <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold',color: 'white'}}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        opacity: 0.5,
                        textAlign: 'center',
                        marginTop: 5,
                        lineHeight: 28,
                        color: 'white'
                    }}>
                        {item.description}
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center'
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            {/* TOP SECTION - Back & Skip button */}
            { renderTopSection() }

            {/* FLATLIST with pages */}
            <FlatList
            data={data}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item._id}
            renderItem={renderFlatlistItem}
            ref={flatlistRef}
            onViewableItemsChanged={handleViewableItemsChanged.current}
            viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
            initialNumToRender={1}
            extraData={SIZES.width}
            /> 


            {/* BOTTOM SECTION - pagination & next or GetStarted button */}
            { renderBottomSection() }

        </View>
    )
}

export default Carousel