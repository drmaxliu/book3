# == Schema Information
#
# Table name: marks
#
#  id         :integer          not null, primary key
#  highlight  :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Mark < ActiveRecord::Base
  attr_accessible :highlight
end
