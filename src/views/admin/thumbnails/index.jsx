import React, { useState  } from 'react';
import { Box, Button, Grid, Image, Input, Text, Alert, AlertIcon, Stack, HStack  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addThumbnail } from '../../../store/thumbnailsSlice';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function ThumbnailsScreen() {
  const dispatch = useDispatch();
  const thumbnails = useSelector((state) => state.thumbnails);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [urlError, setUrlError] = useState('');
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setFileName(file.name); 
        setSelectedFile(URL.createObjectURL(file));
        setUrlError('');
        event.target.value = null;
      } else {
        setUrlError('Please select a valid image file');
        setSelectedFile(null);
        setFileName(null); 
      }
    }
  };

  const handleAddThumbnail = () => {
    if (selectedFile) {
      dispatch(addThumbnail(selectedFile));
      setSelectedFile(null);
      setFileName(null); 
    }
  };

  return (
    <Box p={5}>
      <Box display="block" width="fit-content">
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          mb={3}
          display="none"
          id="file-input"
        />
        <label htmlFor="file-input">
          <HStack spacing={2}>
            <Button as="span" colorScheme="teal" mb={5}>
              Upload Image
            </Button>
            {fileName && (
              <Text fontSize="md" color="gray.600">
                {fileName}
              </Text>
            )}
          </HStack>
        </label>
        {urlError && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {urlError}
          </Alert>
        )}
      </Box>
      <Stack spacing={4} mt={4}>
        <Button onClick={handleAddThumbnail} 
          colorScheme="teal" width="fit-content" 
          mb={5} isDisabled={!selectedFile}>
          Add Thumbnail
        </Button>
      </Stack>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {thumbnails.map((url, index) => (
          <MotionBox
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={url} alt={`Thumbnail ${index}`} />
            <Text p={2}>{`Thumbnail ${index + 1}`}</Text>
          </MotionBox>
        ))}
      </Grid>
    </Box>
  );
}