<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2" class="sidBar">
        <b-row>
          <b-col  cols="2">
            <img class="logo" src="../../assets/logo.png" alt="logo" />
          </b-col>
          <b-col cols="">
            <h4 class="header">Motiv.</h4>
          </b-col>
          <b-row
            class="items"
            v-for="(item) in this.navItems"
            :key="item.id"
            @click="click(item.link)"
            tabindex="1"
          >
            <b-col cols="1">
              <img :src="item.icon" alt="" />
            </b-col>
            <b-col>
              <a >{{ item.link }}</a>
            </b-col>
          </b-row>
          <div class="footer">
          <b-row
            class="items "
            v-for="(item) in this.botItems"
            :key="item.id"
            @click="click(item.link)"
            tabindex="1"
          >
            <b-col cols="1">
              <img :src="item.icon" alt="" />
            </b-col>
            <b-col>
              <a >{{ item.link }}</a>
            </b-col>
          </b-row>
        </div>
        </b-row>
        
      </b-col>
      
      <b-col>
        <b-row><b-navbar variant="faded" type="light">
          <b-icon icon="search" class="icon"></b-icon>
          <input type="search" class="search" placeholder="Search or type" />
          <b-navbar-nav class="ms-auto right">
            <svg
              class="notify"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 13.449V9.62358C16.7983 7.91915 16.1949 6.27033 15.0967 4.9691C13.9986 3.66788 12.4765 2.79823 10.8 2.51416V1.20295C10.8 0.883906 10.6736 0.577931 10.4485 0.352335C10.2235 0.126739 9.91826 0 9.6 0C9.28174 0 8.97651 0.126739 8.75147 0.352335C8.52643 0.577931 8.4 0.883906 8.4 1.20295V2.51416C6.72353 2.79823 5.20143 3.66788 4.10326 4.9691C3.0051 6.27033 2.40172 7.91915 2.4 9.62358V13.449C1.69974 13.6971 1.0932 14.1564 0.663526 14.7637C0.233854 15.371 0.00208741 16.0967 0 16.8413V19.2472C0 19.5662 0.126428 19.8722 0.351472 20.0978C0.576516 20.3234 0.88174 20.4501 1.2 20.4501H4.968C5.24434 21.4694 5.8476 22.3693 6.68471 23.0109C7.52183 23.6524 8.54627 24 9.6 24C10.6537 24 11.6782 23.6524 12.5153 23.0109C13.3524 22.3693 13.9557 21.4694 14.232 20.4501H18C18.3183 20.4501 18.6235 20.3234 18.8485 20.0978C19.0736 19.8722 19.2 19.5662 19.2 19.2472V16.8413C19.1979 16.0967 18.9661 15.371 18.5365 14.7637C18.1068 14.1564 17.5003 13.6971 16.8 13.449ZM4.8 9.62358C4.8 8.34741 5.30571 7.12351 6.20589 6.22113C7.10606 5.31874 8.32696 4.81179 9.6 4.81179C10.873 4.81179 12.0939 5.31874 12.9941 6.22113C13.8943 7.12351 14.4 8.34741 14.4 9.62358V13.2324H4.8V9.62358ZM9.6 21.6531C9.18117 21.6505 8.77029 21.5381 8.4082 21.3271C8.04611 21.1161 7.74541 20.8137 7.536 20.4501H11.664C11.4546 20.8137 11.1539 21.1161 10.7918 21.3271C10.4297 21.5381 10.0188 21.6505 9.6 21.6531ZM16.8 18.0442H2.4V16.8413C2.4 16.5222 2.52643 16.2162 2.75147 15.9906C2.97652 15.7651 3.28174 15.6383 3.6 15.6383H15.6C15.9183 15.6383 16.2235 15.7651 16.4485 15.9906C16.6736 16.2162 16.8 16.5222 16.8 16.8413V18.0442Z"
                fill="#72767C"
              />
            </svg>
            <img
              src="../../assets/avatar.jpg"
              alt="avatar"
              class="profileImg"
            />
          </b-navbar-nav>
        </b-navbar></b-row>
        <div v-if="this.isDashboard" class="bg">
        <b-row class="carCards">
          <b-col v-for="(card, index) in this.cards" :key="index">
            <img  :src="card" alt="card" />
          </b-col>
        </b-row>
        <b-row class="statCards">
          <b-col v-for="(stat, index) in this.statistics" :key="index">
            <img class="statimg" :src="stat" />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="carCards" v-for="(car, index) in this.cars" :key="index">
            <img  class="carimg" :src="car"/>
          </b-col>
        </b-row>
      </div>
      <div v-if="this.isBooking" class="bg">
        <div class="heading">
        <h1 >Booking</h1>
      </div>
        <div class="selection">
          <select class="s" name="New">
            <option>New</option>
          </select>
          <select class="s t" name="Teyota">
            <option>Teyota</option>
          </select>
        </div>
        <b-row class="carCards">
          <b-col class="car" v-for="(fram, index) in this.frames" :key="index">
            <img  :src="fram" alt="card" />
          </b-col>
        </b-row>
      </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {cards, statistics, cars, navItems, botItem,frames} from "../../assets/index.js";
export default {
  name: "NavBar",
  data: () => {
    return {
      navItems: navItems,
      cards: cards,
      statistics: statistics,
      cars: cars,
      botItems: botItem,
      frames: frames,
      isDashboard: false,
      isBooking: false,
    };
  },
  methods: {
    click(item) {
      this.clear()
      if (item == "Dashboard"){
        this.isDashboard = true;
      } else if (item == "Booking") {
        this.isBooking = true;
      }
    },
    clear() {
      this.isBooking = false
      this.isDashboard = false
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.search {
  /* search bar */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 14px;
  gap: 10px;

  width: 358px;
  height: 46px;

  background: #f5f4f6;
  border-radius: 8px;
  padding-left: 41px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
}

.search:focus {
  border: none;
  outline: none;
}

.icon {
  width: 20px;
  height: 20px;
  position: relative;
  left: 2rem;
}

.right {
  /* right */
  margin: 10px 25px;
}
.profileImg {
  width: 54px;
  height: 50px;
  border-radius: 25px;
  margin: 5px;
}
.notify {
  margin: 15px 10px;
}

a {
  text-decoration: none;
  margin: 15px;

}
.items:active {
  background-color: #F5F4F6;
}
.items[tabindex]:focus {
  background-color: #F5F4F6;
  outline: none;
}


.items:hover {
  background-color: #F5F4F6;

}

.logo {
  width: 26.91px;
  height: 26.85px;
  text-align: right !important;
  margin-top: 26px;
  margin-left: 25px;
}
.header {
  text-align: left;
  margin: 25px 20px;
  
}

.items {
  margin-left: 25px;
  margin-top: 15px;
  width: 174px;
  height: 34px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  /* tittle/14 M */

font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* gray/dark 2 */

color: #5F6165;
}
.carCards{
  padding: 15px;
  
  text-align: center;
}

.statCards {
  padding: 15px;
  text-align: center
}
.statimg {
  margin-right: 55px;
}
.bg{
  background-color: #F5F4F6;
}
.carimg {
  margin-left:5px
}
.selection {
  display: inline;
  margin: 30px 25px 25px 25px ;
}
.s {
  margin: auto;
  padding: 10px 20px;
  border: unset;
  width: 122px;
  height: 44px;
  width: 122px;
  height: 44px;
  border-radius: 22.5px ;
  /* Arrow */
  appearance: none;
  background-image: url("../../assets/icons/Rectangle.svg");
   background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  /*background-size: 0.65rem auto;*/ 
  margin-left:25px;
  margin-top: 15px;

  /* text */
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #5F6165;
}

select:focus {
  border: none;
}

.heading {
  padding-top: 25px;
  margin: 0px 25px 25px 50px;
}
.t {
  margin-left: 15px
}
.car {
  margin-top: 20px;
}
.footer {
  margin-top: 27rem;
}
h1 {
  width: 116px;
height: 39px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 39px;
color: #242731;
}
</style>
