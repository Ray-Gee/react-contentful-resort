import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function FormContainer({ context }) {
  // const { loading, sortedRooms, rooms } = context;
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      <form name="contact" method="POST" netlify>
          <div class="form-item">
              <span class="form-item-name">お名前</span>

              <div class="form-item-body">
                  <div class="form-item-text">
                      <input type="text" name="name" value="なまえ" class="m-form-text" required />
                  </div>
              </div>
          </div>

          {/* <div class="recaptcha-item">
              <div data-netlify-recaptcha="true"></div>
          </div> */}

          <div class="m-btn-wrap">
              <input type="submit" name="" value="送信" class="m-btn" />
          </div>
      </form>
    </>
  );
}

export default FormContainer;
