import React from 'react';
import styled from 'styled-components/native';

const HomeScroll = styled.ScrollView``;

const HomeContainer = styled.View`
  background-color: #ffffff;
  margin-bottom: 200px;
`;

const HomeUser = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20px 20px 20px;
`;

const HomeUserLeft = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HomeUserRight = styled.View``;

const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
  background-color: grey;
`;

const UserNameContainer = styled.View`
  margin-left: 10px;
`;

const UserName = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

const UserCredit = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #3182f6;
`;

const HomeRemit = styled.Pressable`
  background-color: #3182f6;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 50px;
  border-radius: 8px;
`;

const HomeRemitText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const HomeDivider = styled.View`
  margin: 0 0 0 20px;
  padding: 1px;
  background-color: #e4e3e6;
`;

const HomeMargin = styled.View`
  width: 100px;
  height: 1000px;
`;

const HomeAccounts = styled.View``;

const AccoutsHeader = styled.View``;

const AccountsTitle = styled.Text``;

const AccountsTotal = styled.View``;

const AccountsTotalNumber = styled.Text``;

const AccountsTotalDetail = styled.Test``;

const AccountsList = styled.View``;

const Account = styled.View``;

const Home = () => {
  return (
    <HomeScroll>
      <HomeContainer>
        <HomeUser>
          <HomeUserLeft>
            <UserImage></UserImage>
            <UserNameContainer>
              <UserName>전진호</UserName>
              <UserCredit>신용 점수 보기</UserCredit>
            </UserNameContainer>
          </HomeUserLeft>
          <HomeUserRight>
            <HomeRemit>
              <HomeRemitText>송금</HomeRemitText>
            </HomeRemit>
          </HomeUserRight>
        </HomeUser>
        <HomeDivider></HomeDivider>
        <HomeAccounts>
          <AccoutsHeader>
            <AccountsTitle>계좌</AccountsTitle>
            <AccountsTotal>
              <AccountsTotalNumber>1,250,805 원</AccountsTotalNumber>
              <AccountsTotalDetail></AccountsTotalDetail>
            </AccountsTotal>
          </AccoutsHeader>
          <AccountsList>
            <Account></Account>
          </AccountsList>
        </HomeAccounts>
        <HomeMargin></HomeMargin>
      </HomeContainer>
    </HomeScroll>
  );
};

export default Home;
