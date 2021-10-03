import React, { useState } from 'react';
import { axiosInstance } from '../config';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image6 from '../assets/images/Image6.jpg';

const ListingForm = (props) => {
  const [formData, setFormData] = useState({
    sale_type: 'For Sale',
    price: '$0+',
    bedrooms: '0+',
    home_type: 'House',
    bathrooms: '0+',
    sqft: '1000+',
    days_listed: '1 or less',
    has_photos: '1+',
    open_house: 'false',
    keywords: '',
  });

  const {
    sale_type,
    price,
    bedrooms,
    home_type,
    bathrooms,
    sqft,
    days_listed,
    has_photos,
    open_house,
    keywords,
  } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    axiosInstance
      .post(
        `/listings/search`,
        {
          sale_type,
          price,
          bedrooms,
          home_type,
          bathrooms,
          sqft,
          days_listed,
          has_photos,
          open_house,
          keywords,
        },
        config
      )
      .then((res) => {
        setLoading(false);
        props.setListings(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <MainSection>
      <Form onSubmit={(e) => onSubmit(e)}>
        <MainForm>
          <RightDiv>
            <div>
              <Label htmlFor="sale_type">Sale or Rent</Label>
              <selectContainer>
                <Select
                  name="sale_type"
                  onChange={(e) => onChange(e)}
                  value={sale_type}
                >
                  <option>For Sale</option>
                  <option>For Rent</option>
                </Select>
              </selectContainer>
            </div>
            <div>
              <Label htmlFor="sqft">Sqft</Label>
              <selectContainer>
                <Select name="sqft" onChange={(e) => onChange(e)} value={sqft}>
                  <option>1000+</option>
                  <option>1200+</option>
                  <option>1500+</option>
                  <option>2000+</option>
                  <option>Any</option>
                </Select>
              </selectContainer>
            </div>
            <div>
              <Label htmlFor="price">Minimum Price</Label>
              <selectContainer>
                <Select
                  name="price"
                  onChange={(e) => onChange(e)}
                  value={price}
                >
                  <option>$0+</option>
                  <option>$200,000+</option>
                  <option>$400,000+</option>
                  <option>$600,000+</option>
                  <option>$800,000+</option>
                  <option>$1,000,000+</option>
                  <option>$1,200,000+</option>
                  <option>$1,500,000+</option>
                  <option>Any</option>
                </Select>
              </selectContainer>
            </div>
            <div>
              <Label htmlFor="days_listed">Days Listed</Label>
              <selectContainer>
                <Select
                  name="days_listed"
                  onChange={(e) => onChange(e)}
                  value={days_listed}
                >
                  <option>1 of less</option>
                  <option>2 of less</option>
                  <option>5 of less</option>
                  <option>10 of less</option>
                  <option>20 of less</option>
                  <option>Any</option>
                </Select>
              </selectContainer>
            </div>
          </RightDiv>
          <LeftDiv>
            <div>
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <selectContainer>
                <Select
                  name="bedrooms"
                  onChange={(e) => onChange(e)}
                  value={bedrooms}
                >
                  <option>0+</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                </Select>
              </selectContainer>
            </div>
            <div>
              <Label htmlFor="has_photos">Has Photos</Label>
              <selectContainer>
                <Select
                  name="has_photos"
                  onChange={(e) => onChange(e)}
                  value={has_photos}
                >
                  <option>1+</option>
                  <option>3+</option>
                  <option>5+</option>
                  <option>10+</option>
                  <option>15+</option>
                </Select>
              </selectContainer>
            </div>

            <div>
              <Label htmlFor="home_type">Home Type</Label>
              <selectContainer>
                <Select
                  name="home_type"
                  onChange={(e) => onChange(e)}
                  value={home_type}
                >
                  <option>House</option>
                  <option>Condo</option>
                  <option>Townhouse</option>
                </Select>
              </selectContainer>
            </div>
            <div>
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                name="keywords"
                type="text"
                onChange={(e) => onChange(e)}
                value={keywords}
              />
            </div>

            <div>
              <Label htmlFor="bathrooms">Baths</Label>
              <Select
                name="bathrooms"
                onChange={(e) => onChange(e)}
                value={bathrooms}
              >
                <option>0+</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </Select>
            </div>
            <CheckDiv>
              <CheckBoxLabel htmlFor="open_house">Open Houses</CheckBoxLabel>
              <CheckBox
                name="open_house"
                type="checkbox"
                onChange={(e) => onChange(e)}
                value={open_house}
              />
            </CheckDiv>

            <div>
              {loading ? (
                <div>
                  <Loader type="Oval" color="#424242" height={50} width={50} />
                </div>
              ) : (
                <Button>Get A Home Now</Button>
              )}
            </div>
          </LeftDiv>
        </MainForm>
      </Form>
    </MainSection>
  );
};

ListingForm.propTypes = {
  setListings: PropTypes.func.isRequired,
};

export default ListingForm;

const MainSection = styled.div`
  background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    ),
    url(${Image6});
  background-image: Image1;

  background-size: cover;
`;

const MainForm = styled.div`
  display: flex;
  margin-bottom: 0px;
  padding-bottom: 0px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;

const RightDiv = styled.div``;

const LeftDiv = styled.div``;

const Form = styled.form`
  /* margin-top: 50px; */

  /* text-align: center; */
`;
const Select = styled.select`
  ::placeholder {
    color: #fff;
  }
  color: #fff;
  padding: 10px 15px;
  height: 42px;
  line-height: 22px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #ccc;
  margin: 20px 0;
  background: transparent;
  border-radius: 8px;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  ::placeholder {
    color: #fff;
  }
  display: block;
  width: 300px;
  height: 40px;
  margin: 20px;

  outline: none;
  font-size: 20px;
  border: 1px solid #ccc;
  background: transparent;
  color: red;
  &:active {
    outline: none;
  }
`;
const Button = styled.button`
  width: 340px;
  height: 40px;
  font-size: 17px;
  background-color: steelblue;
  border: none;
  margin-top: 30px;
  color: #fff;
`;
const Label = styled.label`
  display: block;
  font-size: 17px;
  color: palegreen;
`;
const CheckBoxLabel = styled.label`
  display: inline-block;
  font-size: 17px;
  color: palegreen;
`;
const CheckDiv = styled.div`
  display: flex;
  align-items: center;
`;
const CheckBox = styled.input`
  ::placeholder {
    color: #fff;
  }
  display: inline-block;
  width: 30px;
  height: 40px;
  margin: 20px;

  outline: none;
  font-size: 20px;
  border: 1px solid #ccc;
  background: transparent;
  color: #fff;
  &:active {
    outline: none;
  }
`;
