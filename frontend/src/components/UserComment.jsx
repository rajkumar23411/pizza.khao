import React from 'react'
import { Rating } from '@mui/material';
import moment from 'moment';
const UserComment = ({review}) => {

  const options = {
    value: review.rating,
    size: "medium",
    readOnly: true,
    precision: 0.5,
  }
  return (
    <div className="flex gap-4 justify-start items-start">
                <div className="bg-green-400 h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src="https://secure.gravatar.com/avatar/a378400ca7b28bd69b381af664cc41c1?s=60&d=mm&r=g"
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div>
                    <Rating {...options} sx={{color: "brown"}} />
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="uppercase font-bold text-golden text-sm tracking-wide">
                      {review.name}
                    </span>
                    <span className="text-gray-500 capitalize">
                      - {moment(review.createdAt).calendar()}
                    </span>
                  </div>
                  <div className="text-gray-600 pt-1">
                    {review.comment}
                  </div>
                </div>
              </div>
  )
}

export default UserComment