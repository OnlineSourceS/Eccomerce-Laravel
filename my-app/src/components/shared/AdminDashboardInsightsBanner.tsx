import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function AdminDashboardInsightsBanner() {
  return (
    <div>
       <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">$45,000</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Number of Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">150</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Number of Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">120</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5 New Orders</p>
              </CardContent>
            </Card>
          </div>
    </div>
  )
}
