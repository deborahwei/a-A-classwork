require 'action_view'

class Cat < ApplicationRecord

    validates :color, inclusion: { in: %w(red, orange, ginger, yellow, brown, white, black, grey)}
    validates :sex, inclusion: { in: %w(M, F)}
    # include ActionView::Helpers::DateHelper
    # def age
    #     current_date = Date.now
    #     time_diff = ((current_date - self.birth_date)//365).to_i
    #     return time_diff 
    #     end
    # end
end
