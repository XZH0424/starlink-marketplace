import React, { useState } from 'react';
import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ItemCard = ({item}) => {

    const router = useRouter();
    const [videoplay, setAutoPlay] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        // router.push('/buyitem');
    }

    const handleOver = e => {
        setAutoPlay(true);
    }

    const handleOut = e => {
        setAutoPlay(false);
    }

    return (
        <Flex as="button" textAlign="left" border="none" onMouseOver={handleOver} onMouseLeave={handleOut} onClick={handleClick} w="100%" h="100%" p="2px" borderRadius="7px" bg="transparent" _hover={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} _focusWithin={{ background: "linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" }} >
            <Flex flexDirection="column" w="100%" h="100%" bg="#0e1429" 
                lineHeight="30px" borderRadius="6px" p="1rem" cursor="pointer"
            >
                <Flex mb="1rem">
                    <Image src="item/img_type.png" w="17px" h="17px" alt="item type"></Image>
                    <Flex w="100%" h="100%" ml="0.5rem" justifyContent="center">
                        <Flex w="90%">
                            {videoplay && 
                                <video autoPlay loop muted
                                    style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '20px'
                                    }}
                                >
                                    <source src="/defaultItem.mp4" type="video/mp4" />
                                </video>
                            }
                            {!videoplay && 
                                <video
                                    style={{
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '20px'
                                    }}
                                >
                                    <source src="/defaultItem.mp4" type="video/mp4" />
                                </video>
                            }
                        </Flex>
                    </Flex>
                </Flex>
                <Text textColor="#fff" fontWeight="500" fontSize="20px">{item.title}</Text>
                <Text textColor="rgba(255, 255, 255, 0.4)" fontSize="15px">8/10</Text>
                <Flex alignItems="center">
                    <Image src="item/coin_logo.png" w="20px" h="20px" alt="coin logo"></Image>
                    <Text textColor="#FDB32A" fontSize="15px" fontWeight="500" ml="0.5rem">2940.00</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ItemCard;